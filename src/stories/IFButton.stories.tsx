import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from "storybook/test";
import { IFButton } from '../components/IFButton';

const meta: Meta<typeof IFButton> = {
  title: 'IFUI/Button',
  component: IFButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'canceled'],
      description: 'Button type: filled, outlined or canceled',
    },
    disabled: { control: 'boolean', description: 'Disable the button' },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'HTML button type',
    },
    className: { control: 'text', description: 'Additional Tailwind classes' },
    onClick: { action: 'clicked', description: 'Click event' },
  },
  args: {
    onClick: fn(),
    children: 'IFUI Button',
  },
} satisfies Meta<typeof IFButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: 'Filled Button',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Outlined Button',
  },
};

export const Canceled: Story = {
  args: {
    variant: 'canceled',
    children: 'Canceled Button',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'filled',
    disabled: true,
    children: 'Disabled Button',
  },
};


export const DarkModeTest: Story = {
  render: (args) => (
    <div className="dark p-4 bg-gray-900 rounded-lg">
      <IFButton {...args} variant="outlined" children="Dark Mode Test" />
    </div>
  ),
  parameters: { globals: { darkMode: true } },
};