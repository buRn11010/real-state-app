import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Text, ScrollView, TouchableOpacity } from "react-native";
import { categories } from "@/constants/data";

export default function Filters() {
  //Retrieving URL Parameters
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(
    params.filter || "All"
  );

  const handleCategoryPress = (category: string) => {
    if (selectedCategory === category) {
        setSelectedCategory("");
        router.setParams({ filter: "" }); // Removes filter from the URL
        return;
      }
  
      setSelectedCategory(category);
      router.setParams({ filter: category }); // Updates the URL with the selected filter
    };

    return (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-3 mb-2"
        >
          {categories.map((item, index) => (
            <TouchableOpacity
              onPress={() => handleCategoryPress(item.category)}
              key={index}
              className={`flex flex-col items-start mr-4 px-4 py-2 rounded-full ${
                selectedCategory === item.category
                  ? "bg-primary-300"
                  : "bg-primary-100 border border-primary-200"
              }`}
            >
              <Text
                className={`text-sm ${
                  selectedCategory === item.category
                    ? "text-white font-rubik-bold mt-0.5"
                    : "text-black-300 font-rubik"
                }`}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      );
    };