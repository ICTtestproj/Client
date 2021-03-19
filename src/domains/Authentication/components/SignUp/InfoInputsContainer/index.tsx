import * as React from 'react';

import {SInfoInputsContainer} from './style';

import AuthenticationInputs from './AuthenticationInputs';
import Button from './Button';
import PasswordInputs from './PasswordInputs';
import PersonalInfoInputs from './PersonalInfoInputs';

const InfoInputsContainer: React.FC = () => {
    const [name, setName] = React.useState<string>('');
    const [employNum, setEmployNum] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [code, setCode] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [rePassword, setRePassword] = React.useState('');

    return <SInfoInputsContainer>
      <PersonalInfoInputs name={name} setName={setName} employNum={employNum} setEmployNum={setEmployNum} />
      <AuthenticationInputs />
      <PasswordInputs />
      <Button />
    </SInfoInputsContainer>
}

export default InfoInputsContainer