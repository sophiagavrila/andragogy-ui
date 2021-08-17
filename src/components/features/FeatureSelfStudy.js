import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-1/2 lg:w-1/3 flex-auto h-80 md:h-144`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

// const DecoratorBlob = styled(SvgDotPattern)(props => [
//   tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`
// ]);

// eslint-disable-next-line 
export default ({
  subheading = "Step 4",
  heading = (
    <>
     Self Study.
    </>
  ),
  description = "Asynchrounous self-study is crucial to allow assocaites to focus on areas they are most interested in (or want to understand a bit better based on the outcome of the assessment phase). This helps reduce feelings of frustration, anxiety, or boredom in lecture.  I've found it most effective to allow at least 3 hours after lecture so that they can explore the aforementioned topics at their own pace.  I guide this self study by providing a list of topics and questions that they should research the ansewers to, every day.",
  primaryButtonText = "Daily Self Study Questions",
  primaryButtonUrl = "https://github.com/210517-Enterprise/demos/blob/main/week5/README.md",
  imageInsideDiv = true,
  textOnLeft = true
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  //Change the statistics variable as you like, add or delete objects

  return (
    <Container>
      <TwoColumn css={!imageInsideDiv && tw`md:items-center`}>
      <ImageColumn>
          <Image imageSrc="https://images.assetsdelivery.com/compings_v2/yellowsdesign/yellowsdesign1902/yellowsdesign190200098.jpg" />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <PrimaryButton as="a" target='_blank' href={primaryButtonUrl}>
              {primaryButtonText}
            </PrimaryButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
