/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  startProjectHeader: {
    id: 'base.containers.HomePage.start_project.header',
    defaultMessage: 'Start your next react project in seconds',
  },
  startProjectMessage: {
    id: 'base.containers.HomePage.start_project.message',
    defaultMessage:
      'A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices',
  },
  trymeHeader: {
    id: 'base.containers.HomePage.tryme.header',
    defaultMessage: 'Try me!',
  },
  trymeMessage: {
    id: 'base.containers.HomePage.tryme.message',
    defaultMessage: 'Show Github repositories by',
  },
  trymeAtPrefix: {
    id: 'base.containers.HomePage.tryme.atPrefix',
    defaultMessage: '@',
  },
});
