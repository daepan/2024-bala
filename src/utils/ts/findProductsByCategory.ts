import { PROJECTS,ProjectDataType } from 'utils/constant/projects';

export default function findProjectByCategory(
  category: string
): ProjectDataType[] | undefined {
  return PROJECTS.filter(project => project.category === category);
}
