import { z } from "zod";
import { plantCategories } from "./product.constant";

const createProductValidation = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      })
      .min(1, { message: "Name cannot be empty" }),

    description: z
      .string({
        required_error: "Description is required",
        invalid_type_error: "Description must be a string",
      })
      .min(1, { message: "Description cannot be empty" }),

    price: z
      .number({
        required_error: "Price is required",
        invalid_type_error: "Price must be a number",
      })
      .positive({ message: "Price must be a positive number" }),

    category: z.enum(plantCategories as [string, ...string[]]),
    stock: z
      .number({
        required_error: "Stock is required",
        invalid_type_error: "Stock must be a number",
      })
      .int({ message: "Stock must be an integer" })
      .min(0, { message: "Stock cannot be negative" }),

    image: z
      .string({
        required_error: "Image is required",
        invalid_type_error: "Image must be a string",
      })
      .url({ message: "Image must be a valid URL" }),
    rating: z
      .number({
        required_error: "Rating is required",
        invalid_type_error: "Rating must be a number",
      })
      .max(5),
    brand: z.string({
      required_error: "Brand is required",
      invalid_type_error: "Brand must be a string",
    }),
    status: z.enum(["OUT-OF-STOCK", "IN-STOCK"], {
      required_error: "Status is required",
      invalid_type_error: "Status must be either 'OUT-OF-STOCK' or 'IN-STOCK'",
    }),
  }),
});
const updateProductValidation = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      })
      .min(1, { message: "Name cannot be empty" }).optional(),

    description: z
      .string({
        required_error: "Description is required",
        invalid_type_error: "Description must be a string",
      })
      .min(1, { message: "Description cannot be empty" }).optional(),

    price: z
      .number({
        required_error: "Price is required",
        invalid_type_error: "Price must be a number",
      })
      .positive({ message: "Price must be a positive number" }).optional(),

    category: z.enum(plantCategories as [string, ...string[]]).optional(),
    stock: z
      .number({
        required_error: "Stock is required",
        invalid_type_error: "Stock must be a number",
      })
      .int({ message: "Stock must be an integer" })
      .min(0, { message: "Stock cannot be negative" }).optional(),

    image: z
      .string({
        required_error: "Image is required",
        invalid_type_error: "Image must be a string",
      })
      .url({ message: "Image must be a valid URL" }).optional(),
    rating: z
      .number({
        required_error: "Rating is required",
        invalid_type_error: "Rating must be a number",
      })
      .max(5).optional(),
    brand: z.string({
      required_error: "Brand is required",
      invalid_type_error: "Brand must be a string",
    }).optional(),
    status: z.enum(["OUT-OF-STOCK", "IN-STOCK"], {
      required_error: "Status is required",
      invalid_type_error: "Status must be either 'OUT-OF-STOCK' or 'IN-STOCK'",
    }).optional(),
  }),
});

export const ProductValidation = {
  createProductValidation,
  updateProductValidation
};
