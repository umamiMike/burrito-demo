defmodule ShopWeb.SchemaTest do
  use ShopWeb.ConnCase

  @all_items_query """
  query {
    allItems {
      id
      name
    }
  }

  """

  test "query: allItems", %{conn: conn} do
    conn =
      post(conn, "/api", %{
        "query" => @all_items_query
      })

    assert json_response(conn, 200) == %{
             "data" => %{
               "allItems" => [
                 %{"id" => "foo", "name" => "Foo"},
                 %{"id" => "bar", "name" => "Bar"}
               ]
             }
           }
  end
end
