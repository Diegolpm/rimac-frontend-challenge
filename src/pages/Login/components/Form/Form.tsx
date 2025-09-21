import { useState, type FC } from "react";
import { insuranceFormSchema } from "./form.schema";
import * as yup from "yup";
import { useForm, type Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Forms.scss";
import { requestGlobalApiActions } from "../../../../store/actions";
import { useGlobalAppDispatch } from "../../../../store/app-context";
import type { UserData } from "../../../../types/user";
import { useNavigate } from "react-router-dom";
import { rimacRouteModules } from "../../../../routes";
import Badge from "../../../../shared/components/Badge/Badge";

export type InsuranceFormData = yup.InferType<typeof insuranceFormSchema>;

// Tipos de documento disponibles
const documentTypes = [
  { value: "DNI", label: "DNI" },
  { value: "CE", label: "C.E." },
];

interface InsuranceFormProps {
  loading?: boolean;
}

const InsuranceForm: FC<InsuranceFormProps> = () => {
  const navigate = useNavigate();
  const globalDispatchApp = useGlobalAppDispatch();
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    setValue,
    trigger,
    resetField,
  } = useForm<InsuranceFormData>({
    resolver: yupResolver(insuranceFormSchema) as Resolver<InsuranceFormData>, // ✅ Tipado correcto
    mode: "onChange",
    defaultValues: {
      documentType: "DNI",
      documentNumber: "",
      phoneNumber: "",
      privacyPolicy: false,
      commercialPolicy: false,
    },
  });

  // Watching form values for dynamic behavior
  const documentType = watch("documentType");
  const documentNumber = watch("documentNumber");
  const phoneNumber = watch("phoneNumber");

  const handleFormSubmit = async (
    formData: InsuranceFormData
  ): Promise<void> => {
    // ✅ Usar datos del formulario
    try {
      setIsFormSubmitting(true); // ✅ Activar loading antes de la llamada

      const userDataRequest: UserData = {
        documentType: formData.documentType, // ✅ Usar formData en lugar de getValues
        documentNumber: formData.documentNumber,
        phoneNumber: formData.phoneNumber,
        privacyPolicy: formData.privacyPolicy,
        commercialPolicy: Boolean(formData.commercialPolicy),
      };

      // Llamada a la API
      await requestGlobalApiActions.getUser(globalDispatchApp, userDataRequest);
      navigate(rimacRouteModules.Plans);
      // ✅ Llamar al callback opcional
      //   if (onSubmit) {
      //     onSubmit(formData);
      //   }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsFormSubmitting(false); // ✅ Desactivar loading siempre
    }
  };

  const handleDocumentNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value.replace(/\D/g, ""); // Solo números
    setValue("documentNumber", value);
    trigger("documentNumber");
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Solo números
    if (value.length <= 9) {
      setValue("phoneNumber", value);
      trigger("phoneNumber");
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setValue("documentType", value);
    trigger("documentType"); // ✅ Trigger validación del select
    resetField("documentNumber", { defaultValue: "" }); // Reset document number
  };

  return (
    <section className="insurance-form" aria-labelledby="form-title">
      <div className="insurance-form__container">
        <div className="insurance-form__container--header">
          <div className="insurance-form__container--header--title">
            <Badge text="Seguro Salud Flexible" />

            <div className="insurance-form__header">
              <h1 id="form-title" className="insurance-form__title">
                Creado para ti y tu familia
              </h1>
            </div>
          </div>

          <img
            className="insurance-form__background--mobile"
            src="/src/assets/images/login-responsive.png"
            alt="family"
          />
        </div>

        <p className="insurance-form__subtitle--highlight">
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
          asesoría. 100% online.
        </p>

        {/* Form */}
        <form
          className="insurance-form__form"
          onSubmit={handleSubmit(handleFormSubmit)} // ✅ Usar handleSubmit correctamente
          noValidate
          aria-label="Formulario de cotización de seguro"
        >
          {/* Document Type Select */}
          <div className="insurance-form__field-group">
            <div className="insurance-form__select-wrapper">
              <select
                {...register("documentType")} // ✅ Mantener register para validaciones
                className={`insurance-form__select ${
                  errors.documentType ? "insurance-form__select--error" : ""
                }`}
                aria-describedby={
                  errors.documentType ? "documentType-error" : undefined
                }
                aria-label="Tipo de documento"
                onChange={handleSelectChange}
                value={documentType} // ✅ Usar valor del watch
              >
                {documentTypes.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>

              {/* Document Number Input */}
              <div className="insurance-form__input-group">
                <label
                  htmlFor="documentNumber"
                  className="insurance-form__input-label"
                >
                  Nro. de documento
                </label>
                <input
                  {...register("documentNumber")}
                  id="documentNumber"
                  type="text"
                  inputMode="numeric"
                  value={documentNumber}
                  onChange={handleDocumentNumberChange}
                  className={`insurance-form__input ${
                    errors.documentNumber ? "insurance-form__input--error" : ""
                  }`}
                  aria-describedby={
                    errors.documentNumber ? "documentNumber-error" : undefined
                  }
                  maxLength={12}
                />
              </div>
            </div>

            {errors.documentType && (
              <span
                id="documentType-error"
                className="insurance-form__error"
                role="alert"
              >
                {errors.documentType.message}
              </span>
            )}
            {errors.documentNumber && (
              <span
                id="documentNumber-error"
                className="insurance-form__error"
                role="alert"
              >
                {errors.documentNumber.message}
              </span>
            )}
          </div>

          {/* Phone Number Input */}
          <div className="insurance-form__field">
            <label
              htmlFor="phoneNumber"
              className="insurance-form__input-label"
            >
              Celular
            </label>
            <input
              id="phoneNumber"
              type="tel"
              inputMode="numeric"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              className={`insurance-form__input ${
                errors.phoneNumber ? "insurance-form__input--error" : ""
              }`}
              aria-describedby={
                errors.phoneNumber ? "phoneNumber-error" : undefined
              }
              maxLength={9}
            />
            {errors.phoneNumber && (
              <span
                id="phoneNumber-error"
                className="insurance-form__error"
                role="alert"
              >
                {errors.phoneNumber.message}
              </span>
            )}
          </div>

          {/* Checkboxes */}
          <div className="insurance-form__checkboxes">
            {/* Privacy Policy Checkbox */}
            <div className="insurance-form__checkbox-field">
              <label className="insurance-form__checkbox-label">
                <input
                  type="checkbox"
                  {...register("privacyPolicy")}
                  className="insurance-form__checkbox-input"
                  aria-describedby={
                    errors.privacyPolicy ? "privacyPolicy-error" : undefined
                  }
                />

                <span className="insurance-form__checkbox-text">
                  Acepto lo{" "}
                  <a
                    href="/politica-privacidad"
                    className="insurance-form__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Política de Privacidad
                  </a>
                </span>
              </label>
              {errors.privacyPolicy && (
                <span
                  id="privacyPolicy-error"
                  className="insurance-form__error"
                  role="alert"
                >
                  {errors.privacyPolicy.message}
                </span>
              )}
            </div>

            {/* Commercial Policy Checkbox */}
            <div className="insurance-form__checkbox-field">
              <label className="insurance-form__checkbox-label">
                <input
                  type="checkbox"
                  {...register("commercialPolicy")}
                  className="insurance-form__checkbox-input"
                />

                <span className="insurance-form__checkbox-text">
                  Acepto la{" "}
                  <a
                    href="/politica-comunicaciones"
                    className="insurance-form__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Política Comunicaciones Comerciales
                  </a>
                </span>
              </label>
            </div>

            {/* Terms and Conditions Link */}
            <div className="insurance-form__terms">
              <a
                href="/terminos-condiciones"
                className="insurance-form__terms-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aplican Términos y Condiciones.
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isValid}
            className="insurance-form__submit-button"
            aria-describedby="submit-button-status"
          >
            {isFormSubmitting ? (
              <>
                <span
                  className="insurance-form__loading-spinner"
                  aria-hidden="true"
                />
                Cotizando...
              </>
            ) : (
              "Cotiza aquí"
            )}
          </button>

          <div id="submit-button-status" className="sr-only" aria-live="polite">
            {isFormSubmitting ? "Procesando cotización..." : ""}
          </div>
        </form>
      </div>
    </section>
  );
};

export default InsuranceForm;
