import { ComponentMeta, ComponentStory } from "@storybook/react";
import TextField from "./TextField";

export default {
  component: TextField,
  decorators: [
    (Story) => (
      <div style={{ width: "600px" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

const defaultArgs = {
  label: "Please enter your name",
  id: "name",
};

export const Default = { ...Template };

Default.args = {
  ...defaultArgs,
  inline: false,
};

export const Inline = { ...Template };

Inline.args = {
  ...defaultArgs,
  inline: true,
};

export const Error = { ...Template };

Error.args = {
  ...defaultArgs,
  error: true,
  caption: "Something has petated",
};

export const Disabled = { ...Template };

Disabled.args = {
  ...defaultArgs,
  disabled: true,
};
