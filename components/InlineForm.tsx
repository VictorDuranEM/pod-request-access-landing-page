import Input from "./Input";
import SubmitButton from "./SubmitButton";

export default function InlineForm({ }) {
  return (
    <div className='inline-block bg-darkGray rounded-full px-1'>
      <Input placeholder='Email address' />
      <SubmitButton>Request Access</SubmitButton>
    </div>
  );
}
