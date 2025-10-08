import { t } from 'i18next';
import Section from './Section';
import InfoField from './InfoField';
import { Heart, Mail, Phone, User } from 'lucide-react';
import NoRecords from '@/components/ui/NoRecords';
import { useContext } from 'react';
import EmployeeContext from '@/contexts/EmployeeContext';

const Contacts = () => {
    const employee = useContext(EmployeeContext);
    return (
        <Section
            title={t('Emergency Contacts')}
            body={t('Emergency Contacts Persons')}
        >
            <div className="md:col-span-2 space-y-4">
                {employee.data.emergency_contacts.length === 0 ? (
                    <NoRecords
                        title={t('No emergency contacts added yet.')}
                        body={t(
                            'This employee has no emergency contact information.'
                        )}
                        icon={Phone}
                    />
                ) : (
                    employee.data.emergency_contacts.map((contact, index) => (
                        <div
                            key={index}
                            className="p-4 rounded-lg border-2 border-ash-200 dark:border-ash-700 bg-ash-50 dark:bg-ash-700/50 transition-colors"
                        >
                            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-ash-200 dark:border-ash-600">
                                <h4 className="font-semibold text-ash-900 dark:text-ash-100">
                                    {t('Contact Person')} {index + 1}
                                </h4>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <InfoField
                                    icon={User}
                                    label={t('Contact Name')}
                                    value={contact.name}
                                />
                                <InfoField
                                    icon={Heart}
                                    label={t('Relationship')}
                                    value={contact.relation}
                                />
                                <InfoField
                                    icon={Mail}
                                    label={t('Contact Email')}
                                    value={contact.email}
                                />
                                <InfoField
                                    icon={Phone}
                                    label={t('Contact Phone')}
                                    value={contact.mobile}
                                />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </Section>
    );
};

export default Contacts;
