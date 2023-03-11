import {Form, redirect, useActionData} from "react-router-dom"

const Contact = () => {
  const data = useActionData()
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method ="post" action="/help/contact">
        <label >
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required ></textarea>
        </label>
        <button>Submit</button>
      </Form>
      {data && data.message && <p>{data.message}</p>}
    </div>
  );
};

export default Contact;

export const contactAction = async ({request}) => {
  const data = await request.formData()
  const submission = {
    email: data.get("email"),
    message: data.get("message")
  }
  if(submission.message.length  < 10){
    return {message: "error!!!"}
  }
  
  console.log(submission)
  return redirect("/")
}