import { Flex } from 'components/Layout';
import { FancyTextBox, FormField, GroupForm } from 'components/Forms';

export const AccountPage = ({ isDarkMode }) => {
    return (
        <Flex direction="column" alignItems="center">
            <GroupForm title="Personal Details" isDarkMode={isDarkMode}>
                <FormField fieldName="First Name" isDarkMode={isDarkMode}>
                    <FancyTextBox value="Daryl" isDarkMode={isDarkMode} />
                </FormField>
                <FormField fieldName="Last Name" isDarkMode={isDarkMode}>
                    <FancyTextBox value="Duck" isDarkMode={isDarkMode} />
                </FormField>
                <FormField fieldName="Username" isDarkMode={isDarkMode}>
                    <FancyTextBox value="daryl_duck" isDarkMode={isDarkMode} />
                </FormField>
            </GroupForm>

            <GroupForm title="Address" isDarkMode={isDarkMode}>
                <FormField fieldName="Line 1" isDarkMode={isDarkMode}>
                    <FancyTextBox value="123 Home Street" isDarkMode={isDarkMode} />
                </FormField>
                <FormField fieldName="Line 2" isDarkMode={isDarkMode}>
                    <FancyTextBox value="Unit 1" isDarkMode={isDarkMode} />
                </FormField>
                <FormField fieldName="City" isDarkMode={isDarkMode}>
                    <FancyTextBox value="Melbourne" isDarkMode={isDarkMode} />
                </FormField>                            
            </GroupForm>         
        </Flex>
    );     
}