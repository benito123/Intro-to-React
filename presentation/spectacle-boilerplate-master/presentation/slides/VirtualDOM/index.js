import React from "react";
import { Heading, Slide, Text, List, ListItem, Image, Notes } from "spectacle";
import preloader from "spectacle/lib/utils/preloader";

const images = {
  virtualDom: require("../../../assets/virtual-dom.png"),
};

preloader(images);

export default (
  <Slide bgColor="primary">
    <Heading size={2} textColor="secondary">
      Virtual DOM
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={4}>
      Representation of the DOM in JSON format
    </Text>
    <Image src={images.virtualDom} width="40%" />
    <List textColor="tertiary" textSize={1}>
      <ListItem>Pretty fast virtual DOM</ListItem>
      <ListItem>Only updates sub-tree when required</ListItem>
      <ListItem>Batch DOM updates</ListItem>
      <ListItem>Lightweight enough to run on mobile devices</ListItem>
    </List>
    <Notes>
      - Can produce 200,000 virtual DOM nodes a second
      - Efficient
      - Crated completely from scratch on every setState or dispatch
    </Notes>
  </Slide>
);