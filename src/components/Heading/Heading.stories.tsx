import { ComponentMeta, ComponentStory } from "@storybook/react";
import Heading from "./Heading";

export default {
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Level1 = { ...Template };

Level1.args = {
  level: 1,
  children: "This is a level 1 heading",
};

export const Level3 = { ...Template };

Level3.args = {
  level: 3,
  children: "This is a level 3 heading",
};
