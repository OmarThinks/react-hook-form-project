import { Text, View, TextInput, Button } from "react-native";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function Index() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        alignSelf: "stretch",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>

      <TextInput
        defaultValue=""
        value={getValues().example}
        onChangeText={(newText) => {
          setValue("example", newText);
        }}
        style={{
          backgroundColor: "white",
          borderColor: "black",
          borderWidth: 2,
        }}
      />
      <Button
        title="Submit"
        onPress={() => {
          console.log(getValues());
        }}
      />
    </View>
  );
}
