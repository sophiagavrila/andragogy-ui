import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle, Subheading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-4xl`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded rounded-b-none`
]);

const Details = tw.div`p-6 rounded border-2 border-t-0 rounded-t-none border-dashed border-orange-600 flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

const Title = tw.h5`mt-4 leading-snug font-bold text-lg`;
const Description = tw.p`mt-2 text-sm text-secondary-100`;
const Link = styled(PrimaryButtonBase).attrs({as: "a"})`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

// eslint-disable-next-line 
export default ({
  subheading = "Step 3",
  heading = <>Assessment</>,
  description = "There are three main forms of assessment that I've found effective for associates.  They are either FORMATIVE (assigned daily to reinforce recently covered topics) or SUMMATIVE (assigned once every 3 weeks to demonstrate accumulated mastery over a collection of technologies learned). Below I've included a description of these 3 strategies, and below this component is a list of more Github Classroom Assignment Templates that you are welcome to use.",

}) => {
  const blogPosts = [
    {
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
      // frequency: "",
      category: "Formative: 2x per week",
      title: "HackerRank Contests",
      description: "I typically assign 2 HackerRank problems per week. I assign the second one (the more difficult one) each Friday and have the assocaites talk me through their solution and thinking in a 1-on-1 on Monday. Below is a list to great problems to prepare associates for interviews. Shout out to Nick and Wezley!",
      url: "https://revature0.sharepoint.com/:x:/s/trainers/EYBGzDfDVQFFj811uHC7OskB-b0g3kKvGWzTGrppD0SeRQ?e=FyG7cg",
      buttondesc: "Verified HackerRank Problems"
    },
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS92TbS9Vbdmr8BPZ04XendRFXmBFNCVpP7A&usqp=CAU",
      // frequency: "Owais Khan",
      category: "Formative: biweekly",
      title: "Github Classroom Assignments",
      description: "By leveraging GitHub Classroom, I like to build templates and assign them to my batch once a week or bi-weekly. Below is an example of a 20-Java question assignment in which associates must code 20 method implementations in order to pass the 100 JUnit tests.  These are auto-graded.",
      url: "https://github.com/sophiagavrila/java-problems-template",
      buttondesc: "20 Question Java Assignment"
    },
    {
      imageSrc:
        "https://www.livetecs.com/wp-content/uploads/2019/05/Project-Management-2.png",
      // frequency: "Steve Schoger",
      category: "Summative: 1x per month",
      title: "Curicculum Standard Projects",
      description: "Most curricula have four standard projects that are to be completed about once every three weeks to implement the collective technolgoies learnt over the past couple weeks.  I find it beneficial to give assocaites clear guide-lines, especially in group projects. Below is an example for Java/MSA P1",
      url: "https://github.com/sophiagavrila/project-1",
      buttondesc: "Java/MSA P1 Guidelines"
    },
  ];
  return (
    <Container id="assess">
      <Content>
        <HeadingInfoContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <HeadingTitle>{heading}</HeadingTitle>
          <HeadingDescription>{description}</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Details>
                  <MetaContainer>
                    {/* <Meta>
                      <UserIcon />
                      <div>{post.frequency}</div>
                    </Meta> */}
                    <Meta>
                      <TagIcon />
                      <div>{post.category}</div>
                    </Meta>
                  </MetaContainer>
                  <Title>{post.title}</Title>
                  <Description>{post.description}</Description>
                  <Link href={post.url}  target='_blank'>{post.buttondesc}</Link>
                </Details>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
