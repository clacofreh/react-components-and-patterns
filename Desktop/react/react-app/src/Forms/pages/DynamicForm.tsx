import { Formik, Form } from "formik";
import * as Yup from 'yup'
import { MySelect, MyTextInput } from "../components";
import formJson from "../data/custom-form.json";

const initialValues: { [key: string]: any } = {};
const requiredeFields: { [key: string]: any } = {}



for (const input of formJson) {
  initialValues[input.name] = input.value;
  if(!input.validations) continue;
  
  let schema = Yup.string();

  for(const rule of input.validations){
    if(rule.type === 'required'){
      schema = schema.required(rule.description);
    }
    if(rule.type === 'minLength'){
      schema = schema.min((rule as any).value, rule.description);
    } 
    if(rule.type === 'maxLength'){
      schema = schema.max((rule as any).value, rule.description);
    } 
    if(rule.type === 'correctEmail'){
      schema = schema.email(rule.description);
    }
    
  }
  requiredeFields[input.name] = schema;
  }

const ValidationSchema = Yup.object({...requiredeFields});

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        validationSchema={ValidationSchema}
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {

              if (type === "input" || type === "email" || type === "password") {
                return (
                  <MyTextInput
                    key={name}
                    placeholder={placeholder}
                    type={type as any}
                    label={label as any}
                    name={name}
                  />
                );
              }else if(type === "select"){
                return (
                  <MySelect
                    key={name}
                    label={label as any}
                    name={name}>
                      <option value="">Select an option</option>
                      {
                          options?.map((  {id, label} ) => {
                            return  <option  key={id} value={label}>{label}</option>
                              
                          })
                      }
                    
                    </MySelect>
                );
              }

              return <span>type: {type} not supported</span>;
            })}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  ); /*  */
};
