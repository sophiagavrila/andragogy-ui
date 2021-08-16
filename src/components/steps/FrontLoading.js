import React from "react";
import tw from "twin.macro";
import { SectionHeading as HeadingTitle, Subheading } from "components/misc/Headings.js";

const TextContent = tw.div`lg:py-8 text-center md:text-center`;
const Container = tw.div`relative`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
// const Heading = tw(SectionHeading)`text-center lg:text-4xl xl:text-5xl`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-6xl`;

export default ({

    subheading = "Step 1",
    description = "Frontloading (sometimes called pre-reading) is the pre-teaching of any background knowledge and/or vocabulary that students need in order to engage in a successful first-read of a text (or technology). I spend 5 minutes at the beginning of lecture outlining the topics that will be covered. I then go into a slide show presentation of them for 10 - 15 min.",
    heading = (
        <>
            Front Loading.
        </>
    )

}) => {
    return (
        <Container>
            <Content>
                <HeadingInfoContainer>
                    {subheading && <Subheading>{subheading}</Subheading>}
                    <HeadingTitle>{heading}</HeadingTitle>
                    <HeadingDescription>{description}</HeadingDescription>
                </HeadingInfoContainer>
            </Content>
        </Container>
    );
}


// const FrontLoading = () => {

//     return (
//         <div>
//             <h3>Welcome to Step 1!</h3>
//             <small>Some text about what I'm gonna talk about.</small>
//         </div>
//     );

// };

// export default FrontLoading;