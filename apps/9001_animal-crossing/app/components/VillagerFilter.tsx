import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { useSearchParams } from "@remix-run/react";
import {
  Badge,
  Button,
  Input,
  Card,
  CardContent,
  Combobox,
  Option,
} from "@one-dawn/ui";
import { AnimalCrossingVillager } from "@one-dawn/db";

// 디바운스 함수
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

interface IProps {
  villagers: Omit<AnimalCrossingVillager, "createdAt" | "updatedAt">[];
}

const VillagerFilter: React.FC<IProps> = ({ villagers }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // 디바운스를 위한 로컬 상태
  const [searchInput, setSearchInput] = useState(
    searchParams.get("search") || ""
  );

  // URL에서 다중 필터 값 가져오기 (쉼표로 구분)
  const searchTerm = searchParams.get("search") || "";
  const selectedPersonalities =
    searchParams.get("personality")?.split(",").filter(Boolean) || [];
  const selectedSpecies =
    searchParams.get("species")?.split(",").filter(Boolean) || [];
  const selectedColors =
    searchParams.get("color")?.split(",").filter(Boolean) || [];
  const selectedStyles =
    searchParams.get("style")?.split(",").filter(Boolean) || [];
  const selectedMonths =
    searchParams.get("month")?.split(",").filter(Boolean) || [];

  // 디바운스된 검색 업데이트
  const debouncedUpdateSearch = useCallback(
    debounce((value: string) => {
      const newSearchParams = new URLSearchParams(searchParams);
      if (value.trim() === "") {
        newSearchParams.delete("search");
      } else {
        newSearchParams.set("search", value.trim());
      }
      setSearchParams(newSearchParams, { replace: true });
    }, 300),
    [searchParams, setSearchParams]
  );

  // 검색 입력 처리
  useEffect(() => {
    debouncedUpdateSearch(searchInput);
  }, [searchInput, debouncedUpdateSearch]);

  // URL 파라미터에서 검색어가 변경되면 로컬 상태도 업데이트
  useEffect(() => {
    const urlSearch = searchParams.get("search") || "";
    if (urlSearch !== searchInput) {
      setSearchInput(urlSearch);
    }
  }, [searchParams]);

  // 다중 선택 필터 업데이트 함수
  const updateMultiSelectFilter = (key: string, options: Option[]) => {
    const newSearchParams = new URLSearchParams(searchParams);
    const values = options.map((option) => option.value);

    if (values.length === 0) {
      newSearchParams.delete(key);
    } else {
      newSearchParams.set(key, values.join(","));
    }

    setSearchParams(newSearchParams, { replace: true });
  };

  // 개별 필터 값 제거
  const removeFilterValue = (
    key: string,
    value: string,
    currentValues: string[]
  ) => {
    const newSearchParams = new URLSearchParams(searchParams);
    const newValues = currentValues.filter((v) => v !== value);

    if (newValues.length === 0) {
      newSearchParams.delete(key);
    } else {
      newSearchParams.set(key, newValues.join(","));
    }

    setSearchParams(newSearchParams, { replace: true });
  };

  // 필터 초기화
  const clearFilters = () => {
    setSearchParams({}, { replace: true });
    setSearchInput("");
  };

  const hasActiveFilters =
    searchTerm ||
    selectedPersonalities.length > 0 ||
    selectedSpecies.length > 0 ||
    selectedColors.length > 0 ||
    selectedStyles.length > 0 ||
    selectedMonths.length > 0;

  // 고유값 추출 및 옵션 생성
  const personalityOptions = useMemo(() => {
    const personalities = villagers.map(
      (v) => v.personality_kr || v.personality
    );
    return [...new Set(personalities)].sort().map((personality) => ({
      value: personality,
      label: personality,
    }));
  }, [villagers]);

  const speciesOptions = useMemo(() => {
    const species = villagers.map((v) => v.species_kr || v.species);
    return [...new Set(species)].sort().map((species) => ({
      value: species,
      label: species,
    }));
  }, [villagers]);

  const colorOptions = useMemo(() => {
    const colors = villagers.flatMap(
      (v) => v.fav_colors_kr || v.fav_colors || []
    );
    return [...new Set(colors)].sort().map((color) => ({
      value: color,
      label: color,
    }));
  }, [villagers]);

  const styleOptions = useMemo(() => {
    const styles = villagers.flatMap(
      (v) => v.fav_styles_kr || v.fav_styles || []
    );
    return [...new Set(styles)].sort().map((style) => ({
      value: style,
      label: style,
    }));
  }, [villagers]);

  const monthOptions = useMemo(() => {
    const months = villagers.map(
      (v) => v.birthday_month_kr || v.birthday_month
    );
    return [...new Set(months)].sort().map((month) => ({
      value: month,
      label: month,
    }));
  }, [villagers]);

  // 선택된 옵션들을 Option 형태로 변환
  const selectedPersonalityOptions = selectedPersonalities.map((value) => ({
    value,
    label: value,
  }));

  const selectedSpeciesOptions = selectedSpecies.map((value) => ({
    value,
    label: value,
  }));

  const selectedColorOptions = selectedColors.map((value) => ({
    value,
    label: value,
  }));

  const selectedStyleOptions = selectedStyles.map((value) => ({
    value,
    label: value,
  }));

  const selectedMonthOptions = selectedMonths.map((value) => ({
    value,
    label: value,
  }));

  return (
    <Card className="mb-8 bg-white/90 backdrop-blur-sm border-gray-200">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <Filter className="h-5 w-5 text-gray-700" />
          <h2 className="text-lg font-semibold text-gray-900">필터 및 검색</h2>
          {hasActiveFilters && (
            <Button
              variant="outline"
              size="sm"
              onClick={clearFilters}
              className="ml-auto bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            >
              <X className="h-4 w-4 mr-1" />
              전체 초기화
            </Button>
          )}
        </div>

        {/* 이름 검색 */}
        <div className="mb-6">
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            이름 검색
          </label>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="주민 이름을 입력하세요..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="pl-9 bg-white text-gray-900 border-gray-300 placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* 선택된 필터들 표시 */}
        {hasActiveFilters && (
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              선택된 필터
            </h3>
            <div className="flex flex-wrap gap-2">
              {searchTerm && (
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800 hover:bg-blue-200 cursor-pointer"
                  onClick={() => {
                    setSearchInput("");
                    const newSearchParams = new URLSearchParams(searchParams);
                    newSearchParams.delete("search");
                    setSearchParams(newSearchParams, { replace: true });
                  }}
                >
                  검색: {searchTerm}
                  <X className="h-3 w-3 ml-1" />
                </Badge>
              )}
              {selectedPersonalities.map((personality) => (
                <Badge
                  key={personality}
                  variant="secondary"
                  className="bg-green-100 text-green-800 hover:bg-green-200 cursor-pointer"
                  onClick={() =>
                    removeFilterValue(
                      "personality",
                      personality,
                      selectedPersonalities
                    )
                  }
                >
                  성격: {personality}
                  <X className="h-3 w-3 ml-1" />
                </Badge>
              ))}
              {selectedSpecies.map((species) => (
                <Badge
                  key={species}
                  variant="secondary"
                  className="bg-purple-100 text-purple-800 hover:bg-purple-200 cursor-pointer"
                  onClick={() =>
                    removeFilterValue("species", species, selectedSpecies)
                  }
                >
                  종: {species}
                  <X className="h-3 w-3 ml-1" />
                </Badge>
              ))}
              {selectedColors.map((color) => (
                <Badge
                  key={color}
                  variant="secondary"
                  className="bg-red-100 text-red-800 hover:bg-red-200 cursor-pointer"
                  onClick={() =>
                    removeFilterValue("color", color, selectedColors)
                  }
                >
                  색상: {color}
                  <X className="h-3 w-3 ml-1" />
                </Badge>
              ))}
              {selectedStyles.map((style) => (
                <Badge
                  key={style}
                  variant="secondary"
                  className="bg-orange-100 text-orange-800 hover:bg-orange-200 cursor-pointer"
                  onClick={() =>
                    removeFilterValue("style", style, selectedStyles)
                  }
                >
                  스타일: {style}
                  <X className="h-3 w-3 ml-1" />
                </Badge>
              ))}
              {selectedMonths.map((month) => (
                <Badge
                  key={month}
                  variant="secondary"
                  className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 cursor-pointer"
                  onClick={() =>
                    removeFilterValue("month", month, selectedMonths)
                  }
                >
                  생일: {month}
                  <X className="h-3 w-3 ml-1" />
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* 필터 선택 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {/* 성격 필터 */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              성격 ({selectedPersonalities.length}개 선택)
            </label>
            <Combobox
              multiple
              options={personalityOptions}
              value={selectedPersonalityOptions}
              buttonPlaceholder="성격 선택"
              onChange={(options: Option[]) =>
                updateMultiSelectFilter("personality", options)
              }
              badgeClassName="bg-green-100 text-green-800"
              emptyIndicator={
                <p className="text-center text-sm leading-10 text-gray-600">
                  성격을 찾을 수 없습니다.
                </p>
              }
            />
          </div>

          {/* 종 필터 */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              종 ({selectedSpecies.length}개 선택)
            </label>
            <Combobox
              multiple
              options={speciesOptions}
              value={selectedSpeciesOptions}
              buttonPlaceholder="종 선택"
              onChange={(options: Option[]) =>
                updateMultiSelectFilter("species", options)
              }
              badgeClassName="bg-purple-100 text-purple-800"
              emptyIndicator={
                <p className="text-center text-sm leading-10 text-gray-600">
                  종을 찾을 수 없습니다.
                </p>
              }
            />
          </div>

          {/* 좋아하는 색상 필터 */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              좋아하는 색상 ({selectedColors.length}개 선택)
            </label>
            <Combobox
              multiple
              options={colorOptions}
              value={selectedColorOptions}
              buttonPlaceholder="색상 선택"
              onChange={(options: Option[]) =>
                updateMultiSelectFilter("color", options)
              }
              badgeClassName="bg-red-100 text-red-800"
              emptyIndicator={
                <p className="text-center text-sm leading-10 text-gray-600">
                  색상을 찾을 수 없습니다.
                </p>
              }
            />
          </div>

          {/* 좋아하는 스타일 필터 */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              좋아하는 스타일 ({selectedStyles.length}개 선택)
            </label>
            <Combobox
              multiple
              options={styleOptions}
              value={selectedStyleOptions}
              buttonPlaceholder="스타일 선택"
              onChange={(options: Option[]) =>
                updateMultiSelectFilter("style", options)
              }
              badgeClassName="bg-orange-100 text-orange-800"
              emptyIndicator={
                <p className="text-center text-sm leading-10 text-gray-600">
                  스타일을 찾을 수 없습니다.
                </p>
              }
            />
          </div>

          {/* 생일 월 필터 */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              생일 월 ({selectedMonths.length}개 선택)
            </label>
            <Combobox
              multiple
              options={monthOptions}
              value={selectedMonthOptions}
              buttonPlaceholder="월 선택"
              onChange={(options: Option[]) =>
                updateMultiSelectFilter("month", options)
              }
              badgeClassName="bg-indigo-100 text-indigo-800"
              emptyIndicator={
                <p className="text-center text-sm leading-10 text-gray-600">
                  월을 찾을 수 없습니다.
                </p>
              }
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default React.memo(VillagerFilter);
