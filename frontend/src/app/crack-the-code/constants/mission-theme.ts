import Mission from "./mission";

export default interface MissionTheme {
  id: string;
  title: string;
  tagline: string;
  status: 'active' | 'coming_soon';
  image: string;
  missions: Mission[];
}
