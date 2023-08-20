/////FORM UTILS/////

interface FieldInfo {
  name: string;
  maxLength: number;
}

export const validateFormData = (formData: FormData, fields: FieldInfo[]): string[] => {
  return fields.map(({name, maxLength}) => {
    const value = formData.get(name);

    if (typeof value !== 'string') {
      throw new Error(`${name} must be of type string`);
    }

    if (value.length > maxLength) {
      throw new Error(`${name} exceeds maximum length of ${maxLength}`);
    }

    return value;
  });
}

/////ERROR UTILS/////

export function getErrorMessage(error: unknown): string {
  // Default error message
  const defaultErrorMessage = "An error occurred.";

  // If the error is a string, return it directly
  if (typeof error === 'string') {
    return error;
  }

  // If the error is an object with a message property, return it
  if (typeof error === 'object' && error !== null && 'message' in error) {
    const err = error as { message?: unknown };
    if (typeof err.message === 'string') {
      return err.message;
    }
  }

  // If the error is not a string or an object with a message, return the default message
  return defaultErrorMessage;
}

/////TAGS/////
export function splitTags(tags: string[], charLimit = 32) {
  const visibleTags = [];
  const dropdownTags = [];

  let currentCharCount = 0;
  for (let tag of tags) {
    currentCharCount += tag.length;
    if (currentCharCount > charLimit) {
      dropdownTags.push(tag);
      currentCharCount -= tag.length; // To ensure the next iteration doesn't wrongly push to dropdownTags due to the already exceeded charLimit
    } else {
      visibleTags.push(tag);
    }
  }

  return { visibleTags, dropdownTags };
}