import { Button, Stack, Table } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { PageContainer } from "components/PageContainer";
import { PageContent } from "components/PageContent";
import { DashboardLayout } from "layout/DashboardLayout";
// import { Button } from "lib/mantine";
import type { CustomNextPage } from "next";

export const Index: CustomNextPage = () => {
  return (
    <PageContainer title="ホーム" fluid>
      <Stack spacing="xl">
        <PageContent title="テーブル">
          <SampleTable />
        </PageContent>
        <PageContent title="通知">
          <Button
            onClick={() => {
              return showNotification({ message: "成功しました" });
            }}
          >
            通知を表示
          </Button>
        </PageContent>
      </Stack>
    </PageContainer>
  );
};

const SampleTable = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Element Position</th>
          <th>Element Name</th>
          <th>Symbol</th>
          <th>Atomic ass</th>
        </tr>
      </thead>
      <tbody>
        {[
          { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
          { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
          { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
          { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
          { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
        ].map((element) => {
          return (
            <tr key={element.name}>
              <td>{element.position}</td>
              <td>{element.name}</td>
              <td>{element.symbol}</td>
              <td>{element.mass}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

Index.getLayout = DashboardLayout;

export default Index;
