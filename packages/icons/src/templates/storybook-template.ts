export function storybookTemplate({
  componentName,
  componentFileName,
  metadata,
}: {
  componentName: string;
  componentFileName: string;
  metadata?: {
    description?: string;
    keywords?: string[];
    authors?: string[];
    package?: string;
  };
}) {
  return `
import { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from './${componentFileName}';

const meta = {
  title: 'Icons/${componentName}',
  component: ${componentName},
  tags: ['autodocs'],
  parameters:{
    componentSubtitle:  ${JSON.stringify(metadata?.description) ?? `"Icon Description"`},
    docs:{
       iconMetadata: ${JSON.stringify(metadata ?? {}, null, 3)}
    }
  }
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    size: 100,
    color: '#000'
  },
};
`;
}
