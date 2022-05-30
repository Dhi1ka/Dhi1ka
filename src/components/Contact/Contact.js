import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponent";
import {
  DivContact,
  Form,
  Label,
  Input,
  Textarea,
  Button,
} from "./ContactStyles";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit contact!!");
  };

  return (
    <Section>
      <SectionDivider />
      <SectionTitle main>Contact</SectionTitle>
      <Form id="contact" onSubmit={handleSubmit}>
        <DivContact full>
          <Label htmlFor="name">Name/Company *</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Name/Company"
            required
          />
        </DivContact>
        <DivContact full>
          <Label htmlFor="email">Email *</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            required
          />
        </DivContact>
        <DivContact full>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            type="number"
            name="phone"
            id="phone"
            placeholder="Enter Phone Number"
            required
          />
        </DivContact>
        <DivContact full>
          <Label htmlFor="message">Message *</Label>
          <Textarea
            name="message"
            id="message"
            rows={4}
            cols={50}
            required
          ></Textarea>
        </DivContact>
        <DivContact full>
          <Button type="submit">Submit</Button>
        </DivContact>
      </Form>
    </Section>
  );
};

export default Contact;
