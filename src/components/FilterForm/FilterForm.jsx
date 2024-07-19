import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from "./FilterForm.module.css";
import Icon from "../Icon/Icon";
import { setFilters } from "../../redux/camper/slice";
import { selectFilters } from "../../redux/camper/selectors";
import { useSelector } from "react-redux";

const filters = [
  { id: "wind", label: "AC", name: "airConditioner" },
  { id: "automatic", label: "Automatic", name: "transmission" },
  { id: "eat", label: "Kitchen", name: "kitchen" },
  { id: "tv", label: "TV", name: "TV" },
  { id: "shower", label: "Shower/WC", name: "shower" },
];

const camperTypes = [
  { id: "camper1", label: "Van", value: "panelTruck" },
  { id: "camper2", label: "Fully Integrated", value: "fullyIntegrated" },
  { id: "camper3", label: "Alcove", value: "alcove" },
];

const validationSchema = Yup.object().shape({
  options: Yup.array().min(1, "Select at least one option"),
  camperType: Yup.string().required("Select a camper type"),
});

const FilterForm = () => {
  const selectedFilters = useSelector(selectFilters);
  console.log(selectedFilters);

  return (
    <Formik
      initialValues={{ options: [], camperType: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setFilters(values);
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form className={css.filterForm} onSubmit={handleSubmit}>
          <h2 className={css.title}>Filter Campers</h2>

          <div className={css.section}>
            <h3>Options</h3>
            {filters.map((filter) => (
              <label key={filter.id} className={css.filterLabel}>
                <Field
                  type="checkbox"
                  name="options"
                  value={filter.name}
                  checked={values.options.includes(filter.name)}
                  onChange={handleChange}
                  className={css.checkbox}
                />
                <Icon
                  iconName={filter.id}
                  width="32"
                  height="32"
                  styles={css.optionsIcon}
                />
              </label>
            ))}
          </div>

          <div className={css.section}>
            <h3>Camper Type</h3>
            {camperTypes.map((type) => (
              <label key={type.id} className={css.filterLabel}>
                <Field
                  type="radio"
                  name="camperType"
                  value={type.value}
                  checked={values.camperType === type.value}
                  onChange={handleChange}
                  className={css.radio}
                />
                <span className={css.radioLabel}>{type.label}</span>
              </label>
            ))}
          </div>
          <button type="submit" className={css.searchBtn}>
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FilterForm;
