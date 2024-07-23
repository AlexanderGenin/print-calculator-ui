import { Form, Select } from "antd";
import { useQuery } from "@tanstack/react-query";
import { useApi } from "../context/ApiProvider";
import { getOptions } from "../utils/getOptions";
import { FC } from "react";
import { IPaper } from "../types/types";

interface IMaterialProps {
  handleSelect: (paper: IPaper) => void;
}

const Material: FC<IMaterialProps> = ({ handleSelect }) => {
  const api = useApi();

  const { data: papers = [] } = useQuery({
    queryKey: ["papers"],
    queryFn: () => api.getPapers(),
  });

  const { data: materialTypes, isLoading: isMaterialTypesLoading } = useQuery({
    queryKey: ["material-types"],
    queryFn: () => api.getMaterialTypes(),
  });

  const { data: paperFactures, isLoading: isPaperFacturesLoading } = useQuery({
    queryKey: ["paper-factures"],
    queryFn: () => api.getPaperFactures(),
  });

  const { data: paperColors, isLoading: isPaperColorsLoading } = useQuery({
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
      label: `${d * 1000} г/м²`,
      value: d,
    })) ?? [];

  return (
    <>
      <Form.Item label={"Материал"} name="materialType">
        <Select
          options={[...materialTypesOptions]}
          loading={isMaterialTypesLoading}
          onSelect={(value: number) =>
            handleSelect(papers.find((p) => p.id === value)!)
          }
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
          loading={isPaperColorsLoading}
        />
      </Form.Item>
    </>
  );
};

export default Material;
