import { State, transform } from '@svgr/core';
import chalk from 'chalk';
import { kebabCase, pascalCase } from 'change-case';
import fs from 'fs-extra';
import yaml from 'js-yaml';
import path from 'path';

import { fileURLToPath } from 'url';
import { svgrConfig } from './svgr-config';
import { storybookTemplate } from './templates/storybook-template';
import { validateSvgFileName } from './validate-file';
import { IconMetadata } from './types/icon';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ICONS_DIRECTORY_PATH = path.resolve(__dirname, '../svg-icons');
const OUTPUT_DIRECTORY_PATH = path.resolve(__dirname, './icons');
const INDEX_DIRECTORY_PATH = path.resolve('./src', 'index.ts');
const COMPONENT_FOLDER = 'icons';

const svgrTransform = async (svgCode: string, options: Partial<State>): Promise<string> => {
  return await transform(svgCode, svgrConfig, options);
};

const generateIndexFile = (generatedComponents: string[]): void => {
  const exportStatements = generatedComponents.join('\n');
  fs.writeFileSync(INDEX_DIRECTORY_PATH, exportStatements);
};

const generateListFile = (components: string[]): void => {
  const listContent = `export const iconList = [\n${components
    .map((component) => `"${component}"`)
    .join(',\n')}\n]`;
  const listPath = path.join('./src', `icon-list.tsx`);
  fs.writeFileSync(listPath, listContent);
};

const processSvgFile = async (
  file: string,
  generatedComponents: string[],
  components: string[],
): Promise<void> => {
  const filePath = path.join(ICONS_DIRECTORY_PATH, file);
  const fileName = path.basename(file, '.svg');

  validateSvgFileName(fileName);

  const componentName = pascalCase(fileName);
  const componentFileName = kebabCase(fileName);

  const svgFileContent = fs.readFileSync(filePath, 'utf-8');
  const parts = svgFileContent.split('<svg');

  const iconMetadata = yaml.loadAll(parts[0])[0] as IconMetadata | undefined;
  if (!iconMetadata) {
    console.log(
      chalk.yellow(
        `Warning: Metadata not found for the SVG file named ‘${fileName}’. Please ensure that the file contains valid metadata.`,
      ),
    );
  }
  const svgCode = '<svg' + parts[parts.length - 1];

  const componentCode = await svgrTransform(svgCode, {
    componentName: componentName,
  });

  const componentPath = path.join(OUTPUT_DIRECTORY_PATH, `${componentFileName}.tsx`);

  fs.writeFileSync(componentPath, componentCode);

  const storyCode = storybookTemplate({ componentName, componentFileName, metadata: iconMetadata });
  const storyPath = path.join(OUTPUT_DIRECTORY_PATH, `${componentFileName}.stories.tsx`);
  fs.writeFileSync(storyPath, storyCode);

  components.push(componentName);
  generatedComponents.push(
    `export { ${componentName} } from './${COMPONENT_FOLDER}/${componentFileName}';`,
  );
};

const generateComponents = async (): Promise<void> => {
  try {
    fs.ensureDirSync(OUTPUT_DIRECTORY_PATH);

    const svgFiles = fs
      .readdirSync(ICONS_DIRECTORY_PATH)
      .filter((fileName: string) => fileName.endsWith('.svg'));

    const generatedComponents: string[] = [];
    const components: string[] = [];

    for (const file of svgFiles) {
      await processSvgFile(file, generatedComponents, components);
    }

    generateIndexFile(generatedComponents);
    generateListFile(components);

    console.log(chalk.greenBright('All done!'));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

(async () => {
  await generateComponents();
})();
