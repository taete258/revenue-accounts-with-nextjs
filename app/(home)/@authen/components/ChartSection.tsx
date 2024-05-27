"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  Container,
  Grid,
  LoadingOverlay,
  SimpleGrid,
  rem,
} from "@mantine/core";
import { BarChart, LineChart, PieChart } from "@mantine/charts";
import {
  barChartData,
  lineChartData,
  pieChartData,
} from "@/shared/constants/chartData";
import { useTimeout } from "@mantine/hooks";
const ChartSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { start, clear } = useTimeout(() => setIsLoading(false), 1500);

  useEffect(() => {
    isLoading && start();
    return () => clear();
  }, [isLoading]);

  useEffect(() => {
    setIsLoading(true);
  }, []);
  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1 }} spacing="md">
        <Grid gutter="md">
          <Grid.Col>
            <Card padding="lg" radius="lg">
              <LoadingOverlay
                visible={isLoading}
                zIndex={1000}
                overlayProps={{ radius: "sm", blur: 2 }}
              />
              <BarChart
                h={300}
                data={barChartData}
                dataKey="month"
                series={[
                  { name: "Smartphones", color: "violet.6" },
                  { name: "Laptops", color: "blue.6" },
                  { name: "Tablets", color: "teal.6" },
                ]}
                withTooltip={false}
                withLegend
                legendProps={{
                  verticalAlign: "bottom",
                  height: 50,
                }}
                tickLine="y"
              />
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card padding="lg" radius="lg">
              <LineChart
                h={300}
                data={lineChartData}
                dataKey="date"
                series={[
                  { name: "Apples", color: "indigo.6" },
                  { name: "Oranges", color: "blue.6" },
                  { name: "Tomatoes", color: "teal.6" },
                ]}
                curveType="linear"
                withTooltip={false}
                withLegend
                legendProps={{
                  verticalAlign: "bottom",
                  height: 50,
                  width: 300,
                }}
                tickLine="y"
              />
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card padding="lg" radius="lg">
              <PieChart
                h={300}
                withLabelsLine
                labelsPosition="outside"
                labelsType="percent"
                withLabels
                data={pieChartData}
                withTooltip
                tooltipDataSource="segment"
                size={200}
                className="m-auto"
              />
            </Card>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
};

export default React.memo(ChartSection);
