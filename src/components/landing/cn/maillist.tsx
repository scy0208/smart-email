import { Dialog, Button, Flex, Text, TextField } from "@radix-ui/themes"
import { useState } from 'react'
import { useForm } from 'react-hook-form';



export function Maillist() {

    const [errMessage, setErrMessage] = useState<string>()
    const { register, handleSubmit, reset, formState: { errors, isValid }  } = useForm({
        mode: "onChange",
        criteriaMode: "all"
      });

    async function onSubmit(data: any) {
        const email = data.email
        console.log('Email:', email);
        let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email || !regex.test(email)) {
            setErrMessage("Please input a valid Email")
            return
        }

        try {
            const httpResponse = await fetch('/api/v0/add-maillist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "email": email
                }),
            })
            localStorage.setItem("email", email);
        } catch (error) {

        }
    }
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button color="crimson" size="4">加入测试用户</Button>
            </Dialog.Trigger>

            <Dialog.Content style={{ maxWidth: 450 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Dialog.Title>加入我们的测试用户列表</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                        我们将定制您的专属邮件标签规则
                    </Dialog.Description>

                    <Flex direction="column" gap="3">
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Email
                            </Text>
                            <TextField.Input
                                placeholder="输入您的邮箱"
                                {...register('email', { 
                                    required: true,
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                            />
                        </label>
                        {errors.email && (
                            <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                                <p>{errors.email.message as string}</p>
                            </div>
                        )}
                    </Flex>

                    <Flex gap="3" mt="4" justify="end">
                        <Dialog.Close>
                            <Button type="submit" disabled={!isValid}>加入</Button>
                        </Dialog.Close>
                    </Flex>
                </form>
            </Dialog.Content>
        </Dialog.Root>
    )
}