"use client";

import {ChangeEventHandler, useEffect, useMemo, useState} from "react";
import {Language, SelectOption, SourcesData} from "@/lib/types";
import {languageOptions} from "@/lib/constants";
import {useDebouncedValue, useStoreActions, useStoreState} from "@/lib/hooks";
import {getSourcesOptions} from "./helpers";
import Select from "@/components/select";
import Input from "@/components/input";

type Props = {
  sourcesData: SourcesData;
};

export default function SearchBar({sourcesData}: Props) {
  const {setFilterQInTitle, setFilterSources, setFilterLanguage} = useStoreActions((store) => store);

  const {
    filter: {qInTitle, sources, language},
  } = useStoreState((store) => store);

  const [searchValue, setSearchValue] = useState(qInTitle);

  const debouncedSearchValue = useDebouncedValue(searchValue, 600);

  useEffect(() => {
    setFilterQInTitle(debouncedSearchValue);
  }, [debouncedSearchValue]);

  const sourcesOptions = useMemo<Array<SelectOption>>(
    () => getSourcesOptions(sourcesData.sources),
    [sourcesData.sources]
  );

  const searchChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };
  const sourcesChangeHandler: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setFilterSources(event.target.value);
  };
  const languageChangeHandler: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setFilterLanguage(event.target.value as Language);
  };

  return (
    <div className="top-0 z-10 mx-4 flex w-auto flex-col items-start gap-3 bg-gray-300 p-2 shadow-md md:sticky md:flex-row md:items-center md:justify-between">
      <Input
        id="input-search"
        label="Search"
        placeholder="Ukraine"
        value={searchValue}
        onChange={searchChangeHandler}
      />
      <div className="flex flex-col gap-3 sm:w-full sm:flex-row sm:justify-between sm:gap-6 md:w-auto">
        <Select
          id="selct-sources"
          label="Sources"
          options={sourcesOptions}
          value={sources}
          onChange={sourcesChangeHandler}
          isShowNone
        />
        <Select
          id="select-language"
          label="Languages"
          options={languageOptions}
          value={language}
          onChange={languageChangeHandler}
        />
      </div>
    </div>
  );
}
