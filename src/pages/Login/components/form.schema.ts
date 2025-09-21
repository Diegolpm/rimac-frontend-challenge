import * as yup from "yup";

export const insuranceFormSchema = yup
  .object({
    documentType: yup.string().required("Selecciona el tipo de documento"),
    documentNumber: yup
      .string()
      .required("El número de documento es obligatorio")
      .min(8, "El número de documento debe tener al menos 8 caracteres")
      .max(12, "El número de documento no puede tener más de 12 caracteres")
      .matches(/^\d+$/, "El número de documento solo debe contener números"),
    phoneNumber: yup
      .string()
      .required("El número de celular es obligatorio")
      .length(9, "El número de celular debe tener exactamente 9 dígitos")
      .matches(
        /^[59]\d{8}$/,
        "El número debe empezar con 5 o 9 y tener 9 dígitos"
      ),
    privacyPolicy: yup
      .boolean()
      .required("Debes aceptar la Política de Privacidad")
      .oneOf([true], "Debes aceptar la Política de Privacidad"),
    commercialPolicy: yup.boolean().optional(),
  })
  .required();
