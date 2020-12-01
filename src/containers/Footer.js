import React from "react";
import { Footer } from "../components";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="fb.com">FAQ</Footer.Link>
          <Footer.Link href="fb.com">Investor Relations</Footer.Link>
          <Footer.Link href="fb.com">Way to Watch</Footer.Link>
          <Footer.Link href="fb.com">Comporate Information</Footer.Link>
          <Footer.Link href="fb.com">Netflix Originals</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="fb.com">Help Centre</Footer.Link>
          <Footer.Link href="fb.com">Jobs</Footer.Link>
          <Footer.Link href="fb.com">Terms of Use</Footer.Link>
          <Footer.Link href="fb.com">Contact Us</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="fb.com">Account</Footer.Link>
          <Footer.Link href="fb.com">Redeem Gift Cards</Footer.Link>
          <Footer.Link href="fb.com">Privacy</Footer.Link>
          <Footer.Link href="fb.com">Speed Test</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="fb.com">Media Centre</Footer.Link>
          <Footer.Link href="fb.com">Buy Gift Cards</Footer.Link>
          <Footer.Link href="fb.com">Cookie Preferences</Footer.Link>
          <Footer.Link href="fb.com">Legal Notices</Footer.Link>
        </Footer.Column>
      </Footer.Row>

      <Footer.Break />
      <Footer.Text>Netflix United Kingdom tuanva</Footer.Text>
    </Footer>
  );
}
