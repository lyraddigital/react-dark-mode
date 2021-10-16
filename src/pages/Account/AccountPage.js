import { Flex } from 'components/Layout';
import { FancyTextBox, FormField, GroupForm } from 'components/Forms';

export const AccountPage = () => {
    return (
        <Flex direction="column" alignItems="center">
            <GroupForm title="Personal Details">
                <FormField fieldName="First Name">
                    <FancyTextBox value="Daryl" />
                </FormField>
                <FormField fieldName="Last Name">
                    <FancyTextBox value="Duck" />
                </FormField>
                <FormField fieldName="Username">
                    <FancyTextBox value="daryl_duck" />
                </FormField>
            </GroupForm>

            <GroupForm title="Address">
                <FormField fieldName="Line 1">
                    <FancyTextBox value="123 Home Street" />
                </FormField>
                <FormField fieldName="Line 2">
                    <FancyTextBox value="Unit 1" />
                </FormField>
                <FormField fieldName="City">
                    <FancyTextBox value="Melbourne" />
                </FormField>                            
            </GroupForm>         
        </Flex>
    );     
}