import React, { useState, useEffect } from "react";
import { Box, Button, Flex, Input, Text, VStack } from "@chakra-ui/react";
import { FaCalendarAlt } from "react-icons/fa";

const Index = () => {
  useEffect(() => {
    document.body.style.background = "linear-gradient(135deg, #00ff00, #ffd700, #0000ff)";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
    return () => {
      document.body.style.background = "";
    };
  }, []);

  const [date1, setDate1] = useState({ year: "", month: "", day: "" });
  const [date2, setDate2] = useState({ year: "", month: "", day: "" });
  const [result, setResult] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, dateSetter: React.Dispatch<React.SetStateAction<{ year: string; month: string; day: string }>>) => {
    const { name, value } = e.target;
    dateSetter(prevState => ({ ...prevState, [name]: value }));
  };

  const calculateDifference = () => {
    const d1 = new Date(parseInt(date1.year), parseInt(date1.month) - 1, parseInt(date1.day));
    const d2 = new Date(parseInt(date2.year), parseInt(date2.month) - 1, parseInt(date2.day));
    const diffTime = Math.abs(d2.getTime() - d1.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setResult(`Difference: ${diffDays} days`);
  };

  return (
    <Flex direction="column" align="center" justify="center" p={10}>
      <Box mb={6}>
        <Text fontSize="2xl" fontWeight="bold">Date Calculator</Text>
      </Box>
      <VStack spacing={4}>
        <Box>
          <Text mb={2}>Date 1</Text>
          <Input placeholder="Year" name="year" value={date1.year} onChange={(e) => handleInputChange(e, setDate1)} />
          <Input placeholder="Month" name="month" value={date1.month} onChange={(e) => handleInputChange(e, setDate1)} />
          <Input placeholder="Day" name="day" value={date1.day} onChange={(e) => handleInputChange(e, setDate1)} />
        </Box>
        <Box>
          <Text mb={2}>Date 2</Text>
          <Input placeholder="Year" name="year" value={date2.year} onChange={(e) => handleInputChange(e, setDate2)} />
          <Input placeholder="Month" name="month" value={date2.month} onChange={(e) => handleInputChange(e, setDate2)} />
          <Input placeholder="Day" name="day" value={date2.day} onChange={(e) => handleInputChange(e, setDate2)} />
        </Box>
        <Button leftIcon={<FaCalendarAlt />} colorScheme="teal" onClick={calculateDifference}>
          Calculate Difference
        </Button>
        {result && <Text mt={4} fontSize="lg">{result}</Text>}
      </VStack>
    </Flex>
  );
};

export default Index;