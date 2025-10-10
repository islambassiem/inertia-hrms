// import EmployeeContext from '@/contexts/EmployeeContext';
import { Experience } from '@/types/hr';
// import { useContext } from 'react';
import Section from './Section';
import { t } from 'i18next';
import NoRecords from '@/components/ui/NoRecords';
import { Briefcase } from 'lucide-react';
import ExperienceCard from './ExperienceCard';

const EmployeeExperience = ({ experiences }: { experiences: Experience[] }) => {
    // const employee = useContext(EmployeeContext);
    // const experiences = employee.data.experiences as Experience[];
    return (
        <Section
            title={t('Experiences')}
            body={t(
                'Academic and non Academic Experiences of this employee outsude Saudi Arabia'
            )}
        >
            {experiences.length > 0 ? (
                <div className="space-y-4">
                    {experiences.map((e) => (
                        <ExperienceCard experience={e} key={e.id} />
                    ))}
                </div>
            ) : (
                <NoRecords
                    title={t('No experiences found')}
                    body={t('This employee has no experience records.')}
                    icon={Briefcase}
                />
            )}
        </Section>
    );
};

export default EmployeeExperience;
