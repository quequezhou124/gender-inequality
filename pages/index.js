import * as React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import BookIcon from '@mui/icons-material/Book';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import GavelIcon from '@mui/icons-material/Gavel';

const HighlightedText = styled('span')(({ theme }) => ({
  backgroundColor: '#8901e1',
  padding: '0 4px',
  borderRadius: '4px',
  color: 'white'
}));

const BoldText = styled('span')(({ theme }) => ({
  fontWeight: 'bold',
  color: '#8629d6'
}));

const ImportantText = styled('span')(({ theme }) => ({
  color: '#198754',
  fontStyle: 'italic'
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  color: '#46296e',
  fontWeight: 'bold',
  background:'#ecd5fa'
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#46296e'
}));




export default function Home() {
  return (
    <Container style={{ backgroundColor: '#ffffff', color:'#333333'}}>
      <MainTitle variant="h2" component="h1" gutterBottom>
        Gender Inequality
      </MainTitle>
      <Box my={4}>
        <Typography variant="body1" paragraph>
          Gender inequality is still a serious issue in both online and offline communities. Despite the improvement in the social spheres, disputes towards gender continue to manifest in numerous ways. Meanwhile, some bias are still influencing the new generations, which forms a vicious cycle. To jump out from this trap, we need to first, have a comprehensive understanding of the existing disparity. In this small cyberspace, we will see a wide variety of both online and offline communities with gender inequality.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <SectionTitle variant="h4" component="h2" gutterBottom>
            <BookIcon /> Gender Inequality in Online Communities
          </SectionTitle>
          <Box my={2}>
            <SectionTitle variant="h5" component="h3" gutterBottom>
              <GroupIcon /> Social Media
            </SectionTitle>
            <Typography variant="body1" paragraph>
              On many social media platforms, we can see a large amount of hate speech about women and non-binary individuals. A study by the Pew Research Center found that <a href="https://www.derechosdigitales.org/23444/digital-violence-and-gender-inequality-a-vicious-cycle/" style={{ textDecoration: 'underline' }}>41% of women have experienced online harassment</a>. Particularly, stalking and sexual harassment happen to young women with a high frequency. This online environment is super unfriendly for women and sexual minority.
            </Typography>
            <Typography variant="body1" paragraph>
              Social media platform is like a mirror, reflecting the most authentic thoughts of users, as it provide masks for people to express their spite anonymously. Therefore, we can see the chains that bind women from the society never disappear. And even in the 21st century, there are still women dead from cyberbully based on sexual bias.
            </Typography>
            <Typography variant="body1" paragraph>
            <ImportantText>"On February 19, 2023, 24-year-old Hangzhou girl Zheng Linghua suicide by jumping off, according to Qianjiang Evening News, one of her high school friends confirmed that the news was true. In July 2022, Zheng Linghua shared her offer of graduate application with her grandfather in front of the hospital bed, and was abused on the internet because of his pink hair."
            </ImportantText>
            </Typography>
            <Typography variant="body1" paragraph>
              The stereotypes like <BoldText>girls who like dressing up cannot succeed</BoldText>, <BoldText>girls are born to be bad at science subjects</BoldText> and <BoldText>girls need to be beautiful and stupid to win boys’ heart</BoldText> still exist and is spreading on the internet. These kind of comments reinforce people's impression, and amplifies the seriousness of the gender issue.
            </Typography>
          </Box>
          <Box my={2}>
            <SectionTitle variant="h5" component="h3" gutterBottom>
              <GroupIcon /> <a href="https://webfoundation.org/2020/03/the-online-crisis-facing-women-and-girls-threatens-global-progress-on-gender-equality/" style={{ textDecoration: 'underline' }}>Gaming Communities</a>
            </SectionTitle>
            <Typography variant="body1" paragraph>
              Another area, where gender inequality is obvious, is game industry. Female gamers encounter exclusion frequently. <ImportantText>The Gamergate (an online harassment campaign in that targeted women in the video game industry) controversy indicates the toxic and traditional culture in gaming communities.</ImportantText> While the number of female gamers is growing, women are not respected. The gender issue appears not only in being called unfit for video games, but also in the women game characters. While the male characters in fighting games are always in body armor, helmet and knee pads, <BoldText>women characters are usually in revealing outfits, such as bikini</BoldText>. However, the game developers should know that everyone need an appropriate costume to protect themselves in a fight. Although they are just fictional images, it still shows that the requirement from the society for women is only being a pretty flower vase.
            </Typography>
          </Box>
          <Box my={2}>
            <SectionTitle variant="h5" component="h3" gutterBottom>
              <GroupIcon /> <a href="https://popcouncil.org/insight/the-roots-of-gender-inequality-grow-deeper-than-technology-can-reach/" style={{ textDecoration: 'underline' }}>Representation in Media</a>
            </SectionTitle>
            <Typography variant="body1" paragraph>
              Digital media often underrepresents or stereotypically portrays women and gender minorities. These posts reinforce harmful stereotypes and make these groups isolated.
              <Typography variant="body1" paragraph><ImportantText>in May 2024, a post spread widely online, saying a 21-year-old man "Fat Cat" sent his online girlfriend 500,000 yuan, and suicide by jumping into the river after breaking up. Before the police announced the clarification, "Fat Cat"’s online girlfriend suffered serious cyber manhunt and cyberbully. She was called gold digger at that time. Unexpectedly, it tuned out that "Fat Cat"’s online girlfriend even gave "Fat Cat" more money than he sent. The same events happens frequently, and the reason behind it is because most people are only able to see what they want to see. They prefer to believe that <BoldText>beautiful girls always date with men for money</BoldText>.
              </ImportantText>
              </Typography>
            </Typography>
            <Typography variant="body1" paragraph>
              Besides fake news, female characters created by males always be given the sexualized elements in films, novels and media. This phenomenon is caused by the "male gaze". And it has profound implications for the representation of women’ gender role on the media and in the real life. For example, a popular label, called "cool girl", is describing the <BoldText>character is not only physically attractive but also embodies traits that appeal to male audiences, such as a laid-back attitude and a willingness to engage in traditionally male activities</BoldText>. This stereotype reinforces the idea that women's value lies in their ability to satisfy male expectations. And male writers and directors always let their women character to dress in sexy outfit which is inappropriate and uncomfortable for their jobs. <ImportantText> One notable example of a female character who is skilled, but often dress in revealing outfits is Ada Wong from the Resident Evil franchise. Created by Shinji Mikami, a male writer. Ada Wong is portrayed as a highly expertised spy. Despite her skills and importance to the storyline, she is always shown wearing tight, revealing clothing.</ImportantText>
            </Typography>
            <Typography variant="body1" paragraph>
              The sexualization of female characters affects how audiences perceive and interact with women in real life. This can lead to harmful consequences, including reduced self-esteem, and the gender harassment.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <SectionTitle variant="h4" component="h2" gutterBottom>
            <WorkIcon /> Gender Inequality in Offline Communities
          </SectionTitle>
          <Box my={2}>
            <SectionTitle variant="h5" component="h3" gutterBottom>
              <GavelIcon /> Workplace Disparities
            </SectionTitle>
            <Typography variant="body1" paragraph>
              Gender inequality in the workplace is till common to see nowadays, which can be noticed in the distinct salary and promotion opportunities. Women, especially women of color, face an income gap, and it is less possible for them to be on the leader positions with similar level of ability to their peers. According to the World Economic Forum, <a href="https://popcouncil.org/insight/the-roots-of-gender-inequality-grow-deeper-than-technology-can-reach/" style={{ textDecoration: 'underline' }}>it will take over 135 years for the global gender income gap to converge at the current rate of progress.</a> 
            </Typography>
            <Typography variant="body1" paragraph>
              Moreover, the stereotype of which gender should choose which career will affect people’s choice. <BoldText>Nurses are females, while doctors are males</BoldText> is a typical example, and even ChatGPT will use <BoldText>pronounce she/her for nurses and he/him for doctors when there is no indication to their genders</BoldText>. When I ask it for the reason why it used the pronouns, it confessed the use of "she" for the nurse and "he" for the doctor reflects long-standing gender stereotypes that are prevalent in society.
            </Typography>
          </Box>
          <Box my={2}>
            <SectionTitle variant="h5" component="h3" gutterBottom>
              <FitnessCenterIcon /> Gym
            </SectionTitle>
            <Typography variant="body1" paragraph>
              While men and women pay the same membership fees, the difference in gym usage due to menstrual cycle absences make women unable to utilize the full value of their memberships. This situation raises an issue of gender inequality. If women are unable to use the facilities for approximately one-quarter of each month, the cost per visit becomes higher for them compared to males. However, most gyms have not take this problem seriously. By adopting flexible pricing mechanism and offering supportive services, gyms can ensure that all members receive equal value for their investments.
            </Typography>
          </Box>
          <Box my={2}>
            <SectionTitle variant="h5" component="h3" gutterBottom>
              <GavelIcon /> <a href="https://www.demographic-research.org/articles/volume/43/27/"  style={{ textDecoration: 'underline' }}>Political Representation</a>
            </SectionTitle>
            <Typography variant="body1" paragraph>
              Women are significantly underrepresented in political offices, limiting their influence on making policies. <a href="https://www.demographic-research.org/articles/volume/43/27/"  style={{ textDecoration: 'underline' }}>Women hold only 25% of parliamentary seats worldwide</a>, which is a barrier for the policies about gender. If, women’s voice cannot be heard, it is hard to say the decision of a policy is feasible for all people, because it is challenging to totally relate to a group with distinct gender. This issue is similar to the gender inequality in workplaces mentioned before.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box my={4}>
        <SectionTitle variant="h4" component="h2" gutterBottom>
          Addressing Gender Inequality
        </SectionTitle>
        <Typography variant="body1" paragraph>
          <HighlightedText>Education:</HighlightedText> Schools should add gender studies into their curricula. Also, public campaigns can change attitudes and behaviors towards more equitable treatment of all genders. Because childhood is the golden time for shaping values.
        </Typography>
        <Typography variant="body1" paragraph>
        <HighlightedText>Organizational Efforts:</HighlightedText> Organizations should implement diversity programs, support victims of harassment, and create platforms for supportive voices. A friendly environments can shrink gender inequality and promote equity.
        </Typography>
        <Typography variant="body1" paragraph>
        <HighlightedText>Policy:</HighlightedText> Governments should implement laws promoting gender equality, such as equal pay and anti-discrimination laws. Encouraging women's participation in STEM fields and political representation is helpful.
        </Typography>
        <Typography variant="body1" paragraph>
          Addressing gender inequality in online and offline communities requires efforts in various aspects. Under powers from majority, one day, we can reach a more equitable society where every individual matters.
        </Typography>
      </Box>
    </Container>
  );
}
