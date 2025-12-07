export default interface Mission {
  id: string;
  order: number;
  title: string;
  objective: string;
  target: string;
  owasp: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  status: 'locked' | 'active' | 'completed';
  image: string;
}
