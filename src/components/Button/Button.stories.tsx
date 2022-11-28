import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = {
  ...Template,
};

Primary.args = {
  variant: "primary",
  type: "submit",
  children: "I'm a primary button",
};

export const Outline = {
  ...Template,
};

Outline.args = {
  variant: "outline",
  type: "button",
  children: "I'm an outline button",
};

export const Block = {
  ...Template,
};

Block.args = {
  variant: "primary",
  type: "button",
  block: true,
  children: "I'm a block button",
};
