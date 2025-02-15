"use server";

import { ActionState } from "@/types";

export async function sampleAction(
  input: string
): Promise<ActionState<string>> {
  try {
    // Sample processing
    const processedInput = input.toUpperCase();

    return {
      isSuccess: true,
      message: "Sample action completed successfully",
      data: processedInput,
    };
  } catch (error) {
    console.error("Error in sample action:", error);
    return { isSuccess: false, message: "Failed to process sample action" };
  }
}
