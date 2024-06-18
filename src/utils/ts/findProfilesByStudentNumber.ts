import { PROFILES, ProfilesDataType } from 'utils/constant/profiles';

export default function findProfileByStudentNumber(
  studentNumber: number
): ProfilesDataType | undefined {
  return PROFILES.find(profile => profile.student_number === studentNumber);
}
