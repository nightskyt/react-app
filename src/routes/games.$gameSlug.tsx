import { Text } from "@chakra-ui/react";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  const { gameSlug } = Route.useParams();
  return <Text>{gameSlug}</Text>;
}
