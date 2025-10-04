import { EmployeeData } from '@/types/hr';
import { createContext } from 'react';

const EmployeeContext = createContext({} as EmployeeData);

export default EmployeeContext;
