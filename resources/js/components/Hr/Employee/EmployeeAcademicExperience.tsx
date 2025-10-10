import AcademicExperienceCard from './AcademicExperienceCard';
import { AcademicExperience } from '@/types/hr';
import { t } from 'i18next';
import NoRecords from '@/components/ui/NoRecords';
import { BookMarked } from 'lucide-react';
import Section from './Section';

const EmployeeAcademicExperience = ({
    academicExperiences,
}: {
    academicExperiences: AcademicExperience[];
}) => {
    const experiences = academicExperiences as AcademicExperience[];
    return (
        <Section
            title={t('Academic Experiences')}
            body={t(
                'Experience in Saudi Universities and Educational Institutions'
            )}
        >
            {experiences.length > 0 ? (
                <div className="space-y-4">
                    {experiences.map((e) => (
                        <AcademicExperienceCard key={e.id} experience={e} />
                    ))}
                </div>
            ) : (
                <NoRecords
                    title={t('No academic experience found')}
                    body={t(
                        'This employee has no academic experience records.'
                    )}
                    icon={BookMarked}
                />
            )}
        </Section>
    );
};

export default EmployeeAcademicExperience;
