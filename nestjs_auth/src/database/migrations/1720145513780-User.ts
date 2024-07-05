import { MigrationInterface, QueryRunner } from 'typeorm';

export class User1720145513780 implements MigrationInterface {
  name = 'User1720145513780';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT COMMENT 'ID', \`name\` varchar(255) NOT NULL COMMENT '氏名' DEFAULT '', \`nameKana\` varchar(255) NOT NULL COMMENT '氏名かな' DEFAULT '', \`email\` varchar(255) NOT NULL COMMENT 'メールアドレス' DEFAULT '', \`password\` varchar(255) NOT NULL COMMENT 'パスワード' DEFAULT '', \`createdAt\` datetime(6) NOT NULL COMMENT '作成日時' DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL COMMENT '更新日時' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL COMMENT '削除日時', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`user\``);
  }
}
