"use client";

import { Card, Skeleton, Text, Button, CardSection } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

interface SkeletonCardProps {
  width?: number | string;
  height?: number | string;
}

export default function FilmSkeleton({ width = "100%", height = 200 }: SkeletonCardProps) {
  return (
    <Card withBorder radius="xs" pos="relative" style={{ width }}>
      {/* Image Skeleton */}
      <Card.Section>
        <Skeleton height={height} />
      </Card.Section>

      {/* Title Skeleton */}
      <Text fw={500} lh={1} my={10}>
        <Skeleton height={20} width="70%" />
      </Text>

      {/* Overview Skeleton */}
      <Text fz="sm" c="dimmed" lineClamp={3} lh="1.2em" mb={10}>
        <Skeleton height={14} mb={4} />
        <Skeleton height={14} mb={4} />
        <Skeleton height={14} width="80%" />
      </Text>

      {/* Spacer */}
      <Card.Section>
        &nbsp;
      </Card.Section>

      {/* Button Skeleton */}
      <Skeleton height={36} radius="xs" mt={10} />
    </Card>
  );
}
