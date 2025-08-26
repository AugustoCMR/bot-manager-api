import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerDocumentOptions,
  SwaggerModule,
} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    })
  );
  const config = new DocumentBuilder()
    .setTitle("bot-manager")
    .setDescription("API para gerenciamento de bots")
    .setVersion("1.0")
    .addTag("bots")
    .addBearerAuth()
    .addGlobalResponse({
      status: 500,
      description: "Internal server error",
    })
    .build();
  const customOptions: SwaggerCustomOptions = {
    customSiteTitle: "bot-manager",
    explorer: true
  };
  const documentOptions: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };
  const documentFactory = () =>
    SwaggerModule.createDocument(app, config, documentOptions);
  SwaggerModule.setup("api", app, documentFactory, customOptions);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
