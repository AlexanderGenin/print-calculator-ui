import { Form, Select } from "antd";
import { useQuery } from "@tanstack/react-query";
import { useApi } from "../context/ApiProvider";
import { getOptions } from "../utils/getOptions";

const Material = () => {
  const api = useApi();

  const { data: materialTypes, isLoading: isMaterialTypesLoading } = useQuery({
    queryKey: ["material-types"],
    queryFn: () => api.getMaterialTypes(),
  });

  const { data: paperFactures, isLoading: isPaperFacturesLoading } = useQuery({
    queryKey: ["paper-factures"],
    queryFn: () => api.getPaperFactures(),
  });

  const { data: paperColors, isLoading: isPaperColotsLoading } = useQuery({
    queryKey: ["paper-colors"],
    queryFn: () => api.getPaperColors(),
  });

  const { data: paperDensities, isLoading: isPaperDensitiesLoading } = useQuery(
    {
      queryKey: ["paper-densities"],
      queryFn: () => api.getPaperDensities(),
    }
  );

  const materialTypesOptions = getOptions(materialTypes ?? []);
  const paperColorsOptions = getOptions(paperColors ?? []);
  const paperFacturesOptions = getOptions(paperFactures ?? []);
  const paperDensitiesOptions =
    paperDensities?.map((d) => ({
      label: d.toString(),
      value: d,
    })) ?? [];

  return (
    <>
      <Form.Item label={"Материал"} name="materialType">
        <Select
          options={[...materialTypesOptions]}
          loading={isMaterialTypesLoading}
        />
      </Form.Item>
      <Form.Item name="paperDensity" wrapperCol={{ offset: 8, span: 16 }}>
        <Select
          options={[...paperDensitiesOptions]}
          loading={isPaperDensitiesLoading}
        />
      </Form.Item>
      <Form.Item name="paperFacture" wrapperCol={{ offset: 8, span: 16 }}>
        <Select
          options={[...paperFacturesOptions]}
          loading={isPaperFacturesLoading}
        />
      </Form.Item>
      <Form.Item name="paperColor" wrapperCol={{ offset: 8, span: 16 }}>
        <Select
          options={[...paperColorsOptions]}
          loading={isPaperColotsLoading}
        />
      </Form.Item>
    </>
  );
};

export default Material;
