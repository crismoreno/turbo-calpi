import {Card} from "@repo/ui";
import { action } from '@storybook/addon-actions';
// import defaultCardImg from './images/card/defaultCardImg';
// import blogPostImg from './images/card/blog-post-img.png';
// import projectImg from './images/card/project-img.png';
// import smallImg from './images/card/small-img.png';
// import xpImg from './images/card/xp-img.jpg';


export default {
  title: 'Components/Atom/Card',
  component: 'Card',
};

export const DefaultCardStory = (): JSX.Element => (
  <Card
		 src='https://i.pravatar.cc/300'
    title={<p className="uppercase">Default Card</p>}
  />
);

export const ProjectCardStory = (): JSX.Element => (
  <Card
    src='https://i.pravatar.cc/300'
    title={<p className="uppercase">PartyApp</p>}
    subtitle={'Personal Project'}
    onClick={action('Primary action button')}
    makeHoverEffect
  />
);

export const BlogCardStory = (): JSX.Element => (
  <Card
    src='https://i.pravatar.cc/300'
    title="Landing a job as a Junior Front-End developer"
    subtitle={'21/11/2020 - 3 years ago'}
    onClick={action('Primary action button')}
    makeHoverEffect
  />
);

export const XPCardStory = (): JSX.Element => (
  <Card
    src='https://i.pravatar.cc/300'
    title={
      <>
        <strong>OCT 2019 - JUN 2020</strong> · MA IN FULL-STACK WEB DEVELOPMENT
        AT ASSEMBLER SCHOOL
      </>
    }
    onClick={action('Primary action button')}
  />
);

export const XPCardSmallStory = (): JSX.Element => (
  <Card
    src='https://i.pravatar.cc/300'
    title={
      <>
        <strong>OCT 2019 - JUN 2020</strong> · MA IN FULL-STACK WEB DEVELOPMENT
        AT ASSEMBLER SCHOOL
      </>
    }
    onClick={action('Primary action button')}
  />
);
