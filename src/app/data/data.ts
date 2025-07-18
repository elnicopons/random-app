import {
  faBed,
  faChair,
  faClock,
  faCouch,
  faFaceKissWinkHeart,
  faFaceSurprise,
  faGamepad,
  faGauge,
  faGaugeHigh,
  faGaugeMed,
  faHand,
  faHandFist,
  faHands,
  faKitchenSet,
  faSquare,
} from '@fortawesome/free-solid-svg-icons';
import { ListItem } from '../components/list/list-item.model';

export const places: ListItem[] = [
  {
    description: 'Sillon',
    value: 1,
    icon: faCouch,
  },
  {
    description: 'Cama',
    value: 2,
    icon: faBed,
  },
  {
    description: 'Piso',
    value: 3,
    icon: faSquare,
  },
  {
    description: 'Cocina',
    value: 4,
    icon: faKitchenSet,
  },
  {
    description: 'Mesa',
    value: 5,
    icon: faChair,
  },
  {
    description: 'Silla',
    value: 6,
    icon: faChair,
  },
];

export const times: ListItem[] = [
  {
    description: "1'",
    value: 1,
    icon: faClock,
  },
  {
    description: "2'",
    value: 2,
    icon: faClock,
  },
  {
    description: "3'",
    value: 3,
    icon: faClock,
  },
  {
    description: "4'",
    value: 4,
    icon: faClock,
  },
  {
    description: "5'",
    value: 5,
    icon: faClock,
  },
];

export const actions: ListItem[] = [
  {
    description: 'Oral',
    value: 1,
    icon: faFaceSurprise,
  },
  {
    description: 'Masturbar',
    value: 2,
    icon: faHandFist,
  },
  {
    description: 'Usar juguete',
    value: 3,
    icon: faGamepad,
  },
  {
    description: 'Besar',
    value: 4,
    icon: faFaceKissWinkHeart,
  },
  {
    description: 'Masajear',
    value: 5,
    icon: faHands,
  },
];

export const speeds: ListItem[] = [
  {
    description: 'Lento',
    value: 1,
    icon: faGauge,
  },
  {
    description: 'Medio',
    value: 2,
    icon: faGaugeMed,
  },
  {
    description: 'Rápido',
    value: 3,
    icon: faGaugeHigh,
  },
];
