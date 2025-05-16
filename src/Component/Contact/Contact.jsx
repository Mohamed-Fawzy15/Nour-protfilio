import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
export default function Contact() {
  const schema = z.object({
    firstName: z.string(),
    password: z.string(),
    email: z.string().email("invalid Email"),
    phone: z.string().regex(/^01[0125][0-9]{8}$/),
    message: z.string(),
  });

  const { register, handleSubmit } = useForm({
    mode: "all",
    resolver: zodResolver(schema),
  });

  const handleSubmit = (values) => {};

  return <div></div>;
}
