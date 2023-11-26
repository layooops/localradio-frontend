import chalk from 'chalk';

function isKebabCase(fileName: string) {
  return /^icon-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(fileName);
}
function startsWithIcon(fileName: string) {
  return fileName.startsWith('icon-') && fileName.length > 4;
}

// Function to check and format SVG file names
export function validateSvgFileName(fileName: string) {
  const hasIconPrefix = startsWithIcon(fileName);
  const endsWithIcon = fileName.endsWith('-icon');

  if (!hasIconPrefix || !isKebabCase(fileName) || endsWithIcon) {
    console.error(
      chalk.yellow(
        `Error: "${fileName}" does not adhere to the recommended SVG file naming convention. Check if it starts with "icon" and follows kebab-case.`,
      ),
    );
  }
}
