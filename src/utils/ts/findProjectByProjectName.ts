import { PROJECTS, ProjectDataType } from 'utils/constant/projects';

export default function findProjectByProjectName(
  projectName: string
): ProjectDataType | undefined {
  return PROJECTS.find(project => project.productName === projectName);
}
