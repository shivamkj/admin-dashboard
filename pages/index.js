import Head from "next/head";
import {
  SelectInput,
  TextInput,
  LongTextInput,
  RadioGroupInput,
  CheckboxInput,
  Tabs,
} from "../components/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <h3>Home</h3>

      <SelectInput />
      <div className="mt-4" />

      <TextInput />
      <div className="mt-4" />

      <LongTextInput />
      <div className="mt-4" />

      <RadioGroupInput />
      <div className="mt-4" />

      <CheckboxInput />
      <div className="mt-4" />

      <Tabs />
      <div className="mt-4" />
    </>
  );
}
